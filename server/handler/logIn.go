package handler

import (
	"infa/initializers"
	"infa/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/sessions" // Пакет для работы с сессиями
)

var store = sessions.NewCookieStore([]byte("secret"))

func LogIn(c *gin.Context) {

	c.Header("Access-Control-Allow-Origin", "*")

	type LoginRequest struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	var loginRequest LoginRequest

	if err := c.ShouldBindJSON(&loginRequest); err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	var user models.User
	if err := initializers.DB.Where("email = ?", loginRequest.Email).First(&user).Error; err != nil {
		c.JSON(404, gin.H{
			"error": "user not found",
		})
		return
	}

	if user.Password == loginRequest.Password {
		// Создание сессии
		session, _ := store.Get(c.Request, "session-name")

		// Установка значения в сессии (например, идентификатора пользователя)
		session.Values["userID"] = user.Id

		// Сохранение сессии
		session.Save(c.Request, c.Writer)

		c.JSON(http.StatusOK, gin.H{
			"msg": "You are logged in",
		})
	} else {
		c.JSON(401, gin.H{
			"msg": "Incorrect password",
		})
	}
}

// Пример защищенного маршрута, требующего аутентификации
func ProtectedRoute(c *gin.Context) {
	// Получение сессии
	session, _ := store.Get(c.Request, "session-name")

	// Проверка наличия значения в сессии (например, идентификатора пользователя)
	if userID, ok := session.Values["userID"].(uint); ok {
		// В случае успешной аутентификации
		c.JSON(http.StatusOK, gin.H{
			"msg":    "You are authorized",
			"userID": userID, // Можно передать дополнительные данные
		})
	} else {
		// В случае отсутствия аутентификации
		c.JSON(http.StatusUnauthorized, gin.H{
			"msg": "You are not authorized",
		})
	}
}
