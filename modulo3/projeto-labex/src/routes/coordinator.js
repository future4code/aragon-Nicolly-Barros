export const paginaHome = (navigate)=>{
    navigate("/")
}

export const paginaAdmin = (navigate)=>{
    navigate("/admin")
}

export const paginaLogin = (navigate)=>{
    navigate("/login")
}

export const paginaDetalhes = (navigate, idTrip)=>{
    navigate(`/admin/details/${idTrip}`)
}
