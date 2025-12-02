

import 'reactjs-popup/dist/index.css';
import FormProdutos from '../formprodutos/FormProdutos';
import Popup from 'reactjs-popup';

function ModalProdutos() {
    return (
        <>
            <Popup
                trigger={
                    <button >
                        Novo produto
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '0.75rem'
                }}
            >
                <FormProdutos />
            </Popup>
        </>
    );
}

export default ModalProdutos;