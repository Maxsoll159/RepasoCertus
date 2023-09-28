export const Moda = ({modal, setModal, user}) => {
    console.log(modal)
    return (

        <>
            {
                modal && (
                    <div className='modal'>
                         <img src={user.picture.large} alt="" />
                        <h1>{user.name.first}</h1>
                        <button onClick={() => setModal(false)}>Cerrar Modal</button>
                    </div>
                )
            }
        </>
    )
}
