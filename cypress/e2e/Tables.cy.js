

describe('Tables', function()  {
   
    beforeEach('login',()=>{
        cy.visit("https://demo.opencart.com/admin/")
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click() 
        cy.get("#menu-customer>a").click() 
        cy.get("#menu-customer>ul>li:first-child").click()
    })
   
    it.skip('Count rows and columns in tables', ()=>  
    {
    
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length',7)  
    }
    )
    it.skip('check cell data from specif row and column', ()=>  
    {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("princytrainings4@gmail.com");
   
    }
    )
    it.skip('read all row and column and data in the first page', ()=>  
    {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row,index,rows$)=>{
            cy.wrap($row).within(()=>{
            cy.get("td").each(($col,index,$cols)=>{
                cy.log($col.text())

            })

            })

        })
   
    }
    )
    it.only('Pagination', ()=>  
    {
        let totalpages
        // find total numbers of the page
        cy.get(".col-sm-6.text-end").then((e)=>{
            let mytext=e.text()
           totalpages= mytext.substring(mytext.indexOf('(')+1,mytext.indexOf('Pages')-1)
            cy.log(totalpages)
    })

    let totl=5;
    //diplay all cells in 5 pages
    for (let p = 1; p <= totl; p++) {
       if (totl>1) {
        cy.log("Active page is +++++++"+p)
        cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
        cy.wait(3000)
       // display table
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row,index,rows$)=>{
            cy.wrap($row).within(()=>{
            cy.get("td:nth-child(3)").then((e)=>{
                cy.log(e.text()) // email
                
            })

            })

        })

       }


    
    }
    })
})