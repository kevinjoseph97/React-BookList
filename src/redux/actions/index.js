// needs to take in as arguemtn what it making(payload)
export const addNewBook = (BookToAdd) => {
    return {
        type: "ADD_BOOK", payload: BookToAdd
    }
}


export const deleteBook = (BooktoDelete) => {
    return {
        type: "DELETE_BOOK", payload: BooktoDelete
    }
}


