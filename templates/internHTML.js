function internHTML(data) {
    return `
    <div class="profile intern">
        <h2 class="name">${data.name}</h2>
        <h3><i class="fas fa-user-edit"></i> Intern</h3>
        <ul>
            <li>ID: ${data.id}</li>
            <li>Email: ${data.email}</li>
            <li>Office: ${data.school}</li>
        </ul>
    </div>
    `
}

module.exports = internHTML;