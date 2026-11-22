// Bill export functionality
window.downloadFile = function (filename, base64Content, contentType) {
    const linkSource = `data:${contentType};base64,${base64Content}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = filename;
    downloadLink.click();
};

// Additional utility functions for bill management
window.billUtilities = {
    // Confirm delete with custom styling
    confirmDelete: function (billNumber) {
        return confirm(`Are you sure you want to delete bill ${billNumber}? This action cannot be undone.`);
    },
    
    // Print bill
    printBill: function (elementId) {
        const printContent = document.getElementById(elementId);
        if (printContent) {
            const windowUrl = 'about:blank';
            const uniqueName = new Date();
            const windowName = 'Print' + uniqueName.getTime();
            const printWindow = window.open(windowUrl, windowName, 'width=800,height=600');
            
            printWindow.document.write(printContent.innerHTML);
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }
    }
};
