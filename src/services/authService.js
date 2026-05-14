const authService = {
  login(userData) {
    localStorage.setItem(
      "samakiUser",
      JSON.stringify(userData)
    )

    return userData
  },

  logout() {
    localStorage.removeItem("samakiUser")
  },
}

export default authService
