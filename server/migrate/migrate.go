package main

import (
	"infa/initializers"
	"infa/models"
)

func init() {
	initializers.ConnectToDB()
	initializers.LoadEnvVariables()
}

func main() {
	initializers.DB.AutoMigrate(&models.User{})
}
