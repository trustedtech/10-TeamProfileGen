function engineerHTML(data) {
    return `
    <div class="profile engineer">
        <h2 class="name">${data.name}</h2>
        <h3><i class="fas fa-user-cog"></i> Engineer</h3>
        <ul>
            <li>ID: ${data.id}</li>
            <li>Email: ${data.email}</li>
            <li>Office: ${data.github}</li>
        </ul>
    </div>
    `
}

module.exports = engineerHTML;