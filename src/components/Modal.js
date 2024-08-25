import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Divider,
} from '@chakra-ui/react'

const MyModal = ({ onOpen, onClose, isOpen, children, title, width }) => {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    backgroundColor={'black'}
                    textColor={'white'}
                    width={width}
                    
                >
                    <ModalHeader fontSize={'1.5rem'} backgroundColor={'#233D4D'}>{title}</ModalHeader>
                    <Divider/>
                    <ModalCloseButton />
                    <ModalBody backgroundColor={'black'}>
                        {children}
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}

export default MyModal