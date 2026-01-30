function toggleDropdown() {
    const dropdown = document.getElementById('country-dropdown');
    const caret = document.getElementById('caret-icon');
    
    // Đóng/Mở dropdown
    dropdown.classList.toggle('hidden');
    
    // Xoay icon caret 180 độ khi mở
    caret.classList.toggle('rotate-180');
}

function selectCountry(name, currency) {
    // Cập nhật text hiển thị trên nút
    document.getElementById('selected-country').innerText = currency;
    
    // Đóng menu sau khi chọn
    toggleDropdown();
}

// Đóng dropdown nếu người dùng nhấn ra ngoài vùng menu
window.onclick = function(event) {
    if (!event.target.closest('#country-selector-container')) {
        const dropdown = document.getElementById('country-dropdown');
        if (!dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
            document.getElementById('caret-icon').classList.remove('rotate-180');
        }
    }
}