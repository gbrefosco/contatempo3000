export const TimeAdd = ({ modalVisibility, setVisibility, handleConfirme, children }) => {
    return (
        <>
            <h2>{children}</h2>
            <span>Essa ação não pode ser desfeita.</span>
            <div>
                <button>
                    Cancelar
                </button>
                <button>
                    Confirmar
                </button>
            </div>
        </>

    )
}
