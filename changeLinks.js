const passVerify = document.querySelector(".links_form")
const getFormPass = document.querySelector(".po")
const input = document.getElementById("password")
const getFormBtn = document.querySelector(".submit_password")


// links address 
let one = document.getElementById("link1")
let two = document.getElementById("link2")
let three = document.getElementById("link3")
let four = document.getElementById("link4")

// forms
const getLinkform = document.querySelector(".form_links_to_add")
const linkOne = document.getElementById("first")
const linkTwo = document.getElementById("second")
const linkThird = document.getElementById("third")
const linkFourth = document.getElementById("fourth")
const submitLinks = document.getElementById("change")

getFormPass.addEventListener("click", () => {
    passVerify.classList.toggle("displayPassChack")
})

getFormBtn.addEventListener("click", () => {
    const passValue = input.value

    if (!passValue === "MiftahMame33" || !passValue) return alert("Wrong Password.")
    //  formChange.classList.add("displayLinks")
    // displayPassChack
    passVerify.classList.remove("displayPassChack")
    getLinkform.classList.add("display")

    input.value = ""
})

// submit links
submitLinks.addEventListener("click", () => {
    const input1 = linkOne.value
    const input2 = linkTwo.value
    const input3 = linkThird.value
    const input4 = linkFourth.value

    if (!input1 || !input2 || !input3 || !input4) return alert()


    const linkse = {
        input1,
        input2,
        input3,
        input4
    }
    localStorage.setItem("popLinks", JSON.stringify(linkse))
    getLinkform.classList.remove("display")
    alert("links changed successfully.", one)
})

window.addEventListener("load", () => {
    const savedLinks = JSON.parse(localStorage.getItem("popLinks"))
    if (savedLinks) {
        one.href = savedLinks.input1
        two.href = savedLinks.input2
        three.href = savedLinks.input3
        four.href = savedLinks.input4
    }
})