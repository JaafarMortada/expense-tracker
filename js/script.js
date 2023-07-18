function expenseRow(name, price) {
    return `
        <tr>
            <td>
                <span class="remove" style="cursor: pointer;">&#128465</span>
            </td>
            <td>
                ${name}
            </td>
            <td>
                ${price}
            </td>
        </tr>
    `
}