function showModal(id) {
    $('#' + id).trigger('click');
}

function closeModal() {
    $('.close-modal').trigger('click');
}

export { showModal, closeModal }
