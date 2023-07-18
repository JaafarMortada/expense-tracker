function expenseRow(name, price) {
    return `
        <tr>
            <td>
                <span class="remove-row" style="cursor: pointer;">&#128465</span>
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

function addExpenseRow() {
    const expense_name_input = $("#expense-name")
    const expense_price_input = $("#expense-price")
    console.log(expense_name_input.val())
    if (expense_name_input.val().trim() === "" || expense_price_input.val().trim() === "" ) return
    const new_row = $(expenseRow(expense_name_input.val(), expense_price_input.val()))
    new_row.find(".remove-row").click(function () {
        new_row.remove()
    })
    $('#expenses-table tr#total_row').before(new_row)
    expense_name_input.val("")
    expense_price_input.val("")
}


$(document).ready(function () {
    const add_row_btn = $("#add-row-btn")
    add_row_btn.click(addExpenseRow)
    console.log("hii")
})