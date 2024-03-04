package handler

import (
	"github.com/gin-gonic/gin"
)

func LogIn(c *gin.Context) {
	/*type LoginRequest struct {
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
	}

	if user.Password == loginRequest.Password {
		c.JSON(http.StatusOK, gin.H{
			"msg": "u r entered",
		})
	} else {
		c.JSON(401, gin.H{
			"msg": "pass does not match",
		})
	}*/

	c.JSON(200, gin.H{
		"msg": c.Request,
	})

}
