export const isTokenActive = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    // Si es un JWT, puedes decodificarlo para verificar su expiración
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000; // Tiempo actual en segundos

    return payload.exp > currentTime; // Retorna true si el token no ha expirado
};