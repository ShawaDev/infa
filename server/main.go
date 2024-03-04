package main

import (
	"infa/handler"
	"infa/initializers"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.POST("/sign-up", handler.SignUp)
	r.GET("/tattoos/:id", handler.GetImg)
	r.POST("/sign-in", handler.LogIn)

	r.Run(os.Getenv("port"))
}

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}
