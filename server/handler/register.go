package handler

import (
	"infa/initializers"

	"github.com/gin-gonic/gin"
)

func SignUp(c *gin.Context) {
	name := c.PostForm("name")
	email := c.PostForm("email")
	password := c.PostForm("password")
	phone := c.PostForm("phone")

	type User struct {
		Name        string
		Email       string
		Password    string
		Phonenumber string
	}

	initializers.DB.Create(&User{Name: name, Email: email, Password: password, Phonenumber: phone})

	c.JSON(200, gin.H{
		"msg": "user saved",
	})
}
