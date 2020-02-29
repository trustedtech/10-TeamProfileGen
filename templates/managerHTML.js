function managerHTML(data) {
    return `
    <div class="profile manager">
        <h2 class="name">${data.name}</h2>
        <h3><i class="fas fa-user-tie"></i> Manager</h3>
        <ul>
            <li>ID: ${data.id}</li>
            <li>Email: ${data.email}</li>
            <li>Office: ${data.officeNumber}</li>
        </ul>
    </div>
    `
}

module.exports = managerHTML;