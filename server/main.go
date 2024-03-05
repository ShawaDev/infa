package main

import (
	"infa/handler"
	"infa/initializers"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	r.POST("/sign-up", handler.SignUp)
	r.POST("/sign-in", handler.LogIn)

	r.Run(os.Getenv("port"))
}

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}
