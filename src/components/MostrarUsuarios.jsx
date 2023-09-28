import { useState } from "react"
import { Moda } from "./Moda"

export const MostrarUsuarios = ({ usuario, eliminarUsuario }) => {
    const [modal, setModal] = useState({})

    const abrirModal = (email) => {
        console.log(email)
        setModal(prevent => ({
            ...prevent,
            [email]: true
        }))
    }

    return (
        <table width="100%">
            <thead>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Pais</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                {
                    usuario && (
                        usuario.map((user) => (
                            <tr>
                                <td>
                                    <img src={user.picture.large} alt="" />
                                </td>
                                <td>
                                    <p>{user.name.first}</p>
                                </td>
                                <td>
                                    <p>{user.name.last}</p>
                                </td>
                                <td>
                                    <p>{user.location.country}</p>
                                </td>
                                <td>
                                    <button onClick={() => eliminarUsuario(user.email)}>Eliminar</button>
                                </td>
                                <td>
                                    <button onClick={() => abrirModal(user.email)}>Abrir Modal</button>
                                    {
                                        modal[user.email] && (
                                            <Moda modal={modal[user.email]} setModal={setModal} user={user} />
                                        )
                                    }
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </table>
    )
}
