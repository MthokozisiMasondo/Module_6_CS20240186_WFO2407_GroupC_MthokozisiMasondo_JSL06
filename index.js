// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to order food
function orderingFood(menu) {
    
    // displaying the categories of food available
    const categories = Object.keys(menu)
    for (let i = 0; i < categories.length; i++) {

        const category = categories[i]
        const items = menu[category]
       
        let heading = document.createElement('h2')
        heading.textContent = categories[i]
        
        document.getElementById("menu").appendChild(heading)


    // displaying list of food within each category
        const menuList = document.createElement('ul')
    for (let j = 0; j < items.length; j++) {
        let listMenu = document.createElement('li')
        listMenu.textContent = items[j]

        menuList.appendChild(listMenu)

        
        // displaying new list of ordered food
        listMenu.addEventListener("click", () => {
            let orderedList = document.createElement('li')
            orderedList.textContent = listMenu.textContent
            
            document.getElementById("order-items").appendChild(orderedList)
            

            // changing the total amount
            const totalAmount = document.getElementById("order-total")
            const currentTotal = parseFloat(totalAmount.textContent.replace("R", ""))

            let newTotal = currentTotal + 60

            totalAmount.textContent = newTotal.toFixed(2)


            // removing items from the ordered list
            orderedList.addEventListener("click", () => {
                orderedList.remove()
                let reducedTotal = newTotal - 60

                totalAmount.textContent = reducedTotal.toFixed(2)

            })

        })
        

    }
        document.getElementById("menu").appendChild(menuList)

    }
           
}


orderingFood(menu)