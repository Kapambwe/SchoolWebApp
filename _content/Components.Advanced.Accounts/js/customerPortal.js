// Customer Portal JavaScript Helpers

window.downloadFile = function (filename, base64Data, contentType) {
    const linkSource = `data:${contentType};base64,${base64Data}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = filename;
    downloadLink.click();
};

window.printElement = function (elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('<style>body { font-family: Arial, sans-serif; }</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(element.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
};

window.copyToClipboard = function (text) {
    navigator.clipboard.writeText(text).then(function () {
        console.log('Copied to clipboard');
    }, function (err) {
        console.error('Failed to copy: ', err);
    });
};
