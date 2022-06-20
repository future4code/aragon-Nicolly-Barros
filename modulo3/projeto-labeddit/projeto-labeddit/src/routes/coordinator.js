export const toGoFeed = (navigate) => {
    navigate("/")
}

export const toGoLogin = (navigate) => {
    navigate("/login")
}

export const toGoRegister = (navigate) => {
    navigate("/signup")
}

export const toGoPostDetails = (navigate, id) => {
    navigate(`/post/${id}`)
}

export const comeBack = (navigate) => {
    navigate(-1)
}