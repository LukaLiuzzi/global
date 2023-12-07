class AuthError extends Error {
  constructor(message, status = 400) {
    super(message)
    this.name = "AuthError"
    this.status = status
  }

  toJson() {
    return {
      name: this.name,
      status: "ERROR",
      message: this.message,
    }
  }
}

export default AuthError
