// التطبيق دا رووعه جداً و جميل جداً لانه بيخليك تتعامل كتير جداً مع اللوكال استوردج و بتتعامل معاها باكثر تعقيد و كمان بيخليك تتدرب على تشغيل الاشياء بطريقه راندووم و بترجع تجيبها من اللوكال استوردج (سواء الالوان او الخلفيه و كمان لو عايز حجم و نوع الخط او اى خاصيه عادى) بامانه تطبيق روووووعه جداً .. الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون .. الحمد لله حمداً كثيراً....

// localStorage.clear()

// ** Changing BackGround Randomly
let BackgroundArray = ["url('imgs/1.jpg')", "url('imgs/2.jpg')", "url('imgs/3.jpg')", " url('imgs/4.jpg')", "url('imgs/5.jpg')"]

let MyHeader = document.querySelector(".landing-page");

// Define The SetInterval With A Function , Variable To Call It Easy To Play And Stop Easly
let myRanddomBack;

function playingTheInterval() {
    myRanddomBack = setInterval(() => {
        MyHeader.style.backgroundImage = `${BackgroundArray[parseInt(Math.random() * BackgroundArray.length)]}`
    }, 5000)
}
playingTheInterval()



//** Showing The Option Box , Hiding It
let myGearSpan = document.querySelector(".gear-span")
let OPtionBox = document.querySelector(".settings-box")
let myGearIcon = document.querySelector(".fa-cog");
// let myText = document.querySelector(".logo p")

myGearSpan.addEventListener("click", function() {
    OPtionBox.classList.toggle("open");
    myGearIcon.classList.toggle("fa-spin");
    // myText.classList.toggle("move-theText")
});
// Controlling The Option-Box By The Keyboard
document.onkeyup = function(e) {
    if (e.key === "Escape") {
        OPtionBox.classList.remove("open");
    }
}



//** Changing The Property Of (--main-color), Active Class From The Option box
let colorsList = document.querySelectorAll(".colors-list li")
let myRoot = document.querySelector(":root")

// Restoring the --main-color From The Local Storage To Set It To The :Root
if (localStorage.getItem("main-color")) {
    myRoot.style.setProperty("--main-color", localStorage.getItem("main-color"), "important")
}
// Restoring the ("active" class) From The Local Storage To Set It To The ul element
if (localStorage.getItem("active-class")) {
    colorsList.forEach(function(e) {
        if (e.style.backgroundColor === localStorage.getItem("main-color")) {
            e.classList.add("active")
        }
    })
}

colorsList.forEach(function(e) {
    e.onclick = function() {
        colorsList.forEach(function(e) {
            e.classList.remove("active")
        })
        this.classList.add("active");
        window.localStorage.setItem("active-class", "active")
        window.localStorage.setItem("main-color", this.style.backgroundColor)
        myRoot.style.setProperty("--main-color", this.style.backgroundColor, "important")
    }
});



//** Controlling The Random Background If We Need It To Change Or Not And Appling Active Class ( Which Refers To Yes (Play The Random) , No (Stop The Random) )
let myspans = document.querySelectorAll(".random-background span");

//Resotring The Active Class From The Local Storage And Check If We Choosed No Random Play
if (window.localStorage.getItem("random-class")) {
    myspans.forEach(function(span) {
        if (window.localStorage.getItem("random-class").includes(`${
            span.className
        }`)) {
            span.classList.add("active");
            if (span.classList.contains("no")) {
                clearInterval(myRanddomBack);
            }
        }
    })
}

// Adding Active Class To The Button We Click On It And Checking If That Active Button Is Yes Or No To Play Or Stop The Random Background Then Stoing The Value Of It (Yes Or No) In The LocalStorage While Reloading Or Closing The Window Return The Option Of Play Or Stop The Random
myspans.forEach(function(span) {
    span.addEventListener("click", function() {
        myspans.forEach(function(e) {
            e.classList.remove("active")
        })
        this.classList.add("active");
        localStorage.setItem("random-class", this.className);

        if (span.classList.contains("yes")) {
            playingTheInterval()
        } else {
            // هنا احنا عملنا الانتيرفال يشتغل فى الديفلت و حاله انك تدوس على اليااس و اول ما تدوس النوو بيروح يوقف الانتيرفال الى كان شغال فى اليس و الديفلت كمان علشان كدا لازم نربط الانتيرفال بتاع البيس بنفس المتغير الى مربوط بيه ف الديفلت .. و ترجع تدوس يااس يشتغل بتاع الياس بس (انما بتاع الديقلت وقف من اول نوو) و اما تدوس على النوو لتانى مره هيروح يوقف الانتيرفال بتاع اليااس بس (لانه هو الوحيد الى شغال ) و بكدا يكون التحكم فى الانتيرفال من الزرار يااس و نوو بس ..  
            clearInterval(myRanddomBack);
        }

    })
});


//** InCreasing Width Of Elements When Scroll And Reach The offsetTop Of The Section
let myProgressSpans = document.querySelectorAll(".progress-back span");
let mySillsDiv = document.querySelector(".our-skills");
let myProgressSpansAfter = document.querySelectorAll(".progress-back span:after");

window.onscroll = function() {
    if (scrollY >= mySillsDiv.offsetTop) {
        myProgressSpans.forEach(function(span) {

            // Using The Custom-Attribute (data-width) To Increase The Width
            span.style.width = span.dataset.width
        })
    }
}

//** How To Create A Popup-Box And Control It All 
let myImages = document.querySelectorAll(".gallery-imgs img")

myImages.forEach((image) => {

    image.addEventListener("click", () => {

        // Creating The Overlay Div
        let Overlay = document.createElement("div")
        Overlay.className = "my-overlay";

        // Append the overlay to the body
        document.body.appendChild(Overlay);

        // creating the popup-box with it's image
        let popupBox = document.createElement("div")
        popupBox.className = "popup-Box";

        // create the image to append it to the body
        let myimage = document.createElement("img")
        myimage.src = image.src;
        myimage.className = "Zimage"

        // append the header to the popup-box
        if (image.alt !== '') {
            // create the header
            let myImgHeader = document.createElement("h3")
            myImgHeader.className = "myImg-Header"

            // create the textNode of the haeder from the alt
            let headerText = document.createTextNode(image.alt)

            // append the text to the header
            myImgHeader.appendChild(headerText)

            // append the imgHeader To the popup-box
            popupBox.appendChild(myImgHeader)
        }
        //creating the close button
        let closeButton = document.createElement("span")
        closeButton.className = "close-Button"

        // create the close-button text (X)
        let buttonText = document.createTextNode("X")

        // append the text to the span close
        closeButton.appendChild(buttonText)

        // append the close span to the popup-box
        popupBox.appendChild(closeButton)

        popupBox.appendChild(myimage);

        // append the popup-box to the body
        document.body.appendChild(popupBox)
    })
})

// when i click on the close span it should remove the overlay and the popup-box
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-Button")) {
        // removing the popup-box
        e.target.parentElement.remove();
        // = e.target.parentNode.remove();

        //removing the overlay
        document.querySelector(".my-overlay").remove();
    }
})


//** Selecting The Bullts , Links To Smoothly Move In The Page Between It's Sections (Onclick)
let mydives = document.querySelectorAll(".bullts .bullt .text");
moveToTheSection(mydives)

let myLinks = document.querySelectorAll(".links a");
moveToTheSection(myLinks)

function moveToTheSection(elements) {
    elements.forEach(function(ele) {
        ele.onclick = function(e) {

            e.preventDefault(); // الخطوه بتاع ال اى.بريفينت ديفيلت() دى علشان نمنع انك اول ما تضغط على اللينك انه يروح ياخد الاتش ريف الى هو هنا # و يحطها فى ال اى بى ادريس او اللينك بتاع الصفحه و بالتالى اما تيجى تنفذ الاسكرول اينتو فيو  للسيكشن المعين هتلاقى اصلا ان ال اى بى بتاعك فيه علامه الشباك او الهاش الى هى المفروض توديك على مكان و بالتالى الايغينت بتاع الاسكروول اينتو فيو مش هيتم .. و لو تفتكر احنا كنا بنعرف نربط اللينكس دول بالسيكيشنز الى احنا عايزينهم باننا نعمل فى الاتش ريف بتاع اللينك #و الاى دى بتاع السيكشين.. بس دا كان بيتم فى اللينكس بس انما بالجافا اسكريبت تقدر تعمل اكرول من اى عنصر لاى سيكشين او اى مكان فى الصفحه...

            // window.scrollTo({
            //     top: document.querySelector(`.${e.dataset.link}`).offsetTop,
            //     behavior: "smooth"
            // })

            // = 

            // API Property هى هى نفس الخاصيه بتاع الاسكروول توو(< و الاوفسيت توب بتاع العنصر>)
            // scrollIntoView({ behavior:'smooth' });
            document.querySelector(`.${e.target.dataset.link}`).scrollIntoView({
                behavior: 'smooth'
            })

        }
    })
}

// Function For Showing The Bullts If The Background Of A Section Is The Same Color Of The Bullts
function chngingColor(elements) {
    // خد بالك لو انتا بتستعمل اكتر من ايفينت ( ويندوو اون اسكرول ) هنا لازم تستعمل الادد ايفينت ليسنير علشان كل الايفينتس بتاعك تشتغل انما لو استعملت (الويندوو.اون اسكروول ) هتلاقى ان الاكواد الى بعدها كلها مش هتشتغل لاننا عارفين سابقاً ان الادد ايفينت ليسنير بتمكنك من انك تعمل اكتر من ايفينت على نفس العنصر و كلهم بيشتغلوا عادى 
    window.addEventListener("scroll", () => {
        if (scrollY >= document.querySelector(".landing-page").offsetTop && scrollY <= document.querySelector(".the-about").offsetTop) {
            elements.forEach((el) => {
                el.classList.add("changeBulltColor")
            })
        } else {
            elements.forEach((el) => {
                el.classList.remove("changeBulltColor")
            })
        }
    })
}
chngingColor(document.querySelectorAll(".bullts .bullt"))

// Showing and Disappearing The Bullts(From Option Box) , Dealing With localStorage
//خد بالك ان البولتس المقصوده هنا هى البولتس الى ف الاوبشين بوكس و ليست البولتس بتاع النافيجيشين 
// علفكره احنا ممكن نعمل فانكشن محدده لكلاس الاكتيف بحيث اى عناصر عايزين نديهم كلاس الاكتيف و نشيله من الباقى زى ما تم فى الالوان و الراندوم باكجروند و الشو اند ديس ابير بولتس ساعتها كل الى هنعمله اننا نستدعى الفانكشن بس مع اختلاف الارجيومنتس بتاعها بس   

let bulletSpans = document.querySelectorAll(".Show-Bullts span")

if (localStorage.getItem("show-bullts")) {
    document.querySelector(".bullts").style.display = localStorage.getItem("show-bullts");

    if (localStorage.getItem("show-bullts") === "block") {
        document.querySelector(".Show-Bullts .yes").classList.add("active")
    } else {
        document.querySelector(".Show-Bullts .no").classList.add("active")
    }
}

bulletSpans.forEach((span) => {
    span.addEventListener("click", () => {
        bulletSpans.forEach((span) => {
            span.classList.remove("active")
        })
        span.classList.add("active");
        if (span.classList.contains("no")) {
            document.querySelector(".bullts").style.display = "none";
            window.localStorage.setItem("show-bullts", "none")
        } else {
            document.querySelector(".bullts").style.display = "block";
            window.localStorage.setItem("show-bullts", "block")
        }
    })
})


//** Reset Options 
let ResetSpan = document.querySelector(".Reset-Options span")

ResetSpan.onclick = () => {
    ResetSpan.classList.add("active");
    localStorage.clear();
    // = localStorage.removeItem("show-bullts")
    // = localStorage.removeItem("active-class")
    // = localStorage.removeItem("random-background")

    window.location.reload(); // هنا انا لازم اعمل ريلوود للصفحه بعد ما اعمل ريسيت للاوبشنز علشان ارجع كل حاجه للديفلت بتاعها و الى هو اللون الرئيسي خالص و ان البولتس تكون ظاهره و الراندوم باكجروند تشتغل لانها مش بتقف الا لما ادوس على ال نوو و كذلك ال موضوع اظهار او اخفاء البوولتس .. يعنى بعد ما ادوس على الريسيت اوبشنز هو كدا مسح كل البيانات من اللوكال استوردج بس مرحش مثلا غير اللون الرئيسي الى اللون الديفيلت او غيره يبقى لازم اعمل ريلوود بعدها و بالتالى مش هتلاقى ف اللوكال استوردج بيانات علشان ترجعها و تديها للعناصر بتاعى  

}


//** Scroll To Top Button
let myButon = document.querySelector(".scrollTop")

window.addEventListener("scroll", () => {
    if (scrollY >= document.querySelector(".features").offsetTop) {
        myButon.style.display = "block";
    } else {
        myButon.style.display = "none";
    }
})
myButon.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

//** Toggle Menue
let toggleIcon = document.querySelector(".toggle-icon")
let liksContainer = document.querySelector(".links-container")

// Controlling The Toggle Menue From The Toggle Icon
toggleIcon.addEventListener("click", () => {
    liksContainer.classList.toggle("openToggle");
    toggleIcon.classList.toggle("zmaincolor")
})

// Controlling The Toggle Menue From Anywhere In The Document Except (Toggle icon , Links-Container)
document.addEventListener("click", (e) => {
    // هنا بقوله لو المكان الى بضغط عليه فى الديكيومنت بتاعى مش بيساوى التووجيل منيو او التووجيل ايكون اقفل المنيو (الى هو خلى الليفت ب -200%) تمام و كمان شيل اللون الى على الايكون لانى الطبيعى انك هكون ضغطت على الايكون علشان المنيو تطلع و بالتالى اتلونت الايكون و هنا لازم استخدم انى اشيل الكلاس مش اعمله تووجيل عشلان لو تووجيل كدا كل ما تدوس ف اى حته هتلاقى المنيو ظهرت و الايكون اتلونت 
    if (e.target !== toggleIcon && e.target !== liksContainer) {
        liksContainer.classList.remove("openToggle");
        toggleIcon.classList.remove("zmaincolor");
    }
    // console.log(e.target)
});

// Stop The Propagation();
// فى مشكله هنا هتواجهنا و احنا شغالين و هى انك اما تدووس على التووجيل ايكون او النووجيل منيو (اللينكس كونتينر) الايليمنت (اى) هتلاقيها بتجيب العنصر الى بتدوس عليه بالظبط يعنى لو فى عناصر جوا اللينكس-كونتينر او التووجيل ايكون هتلاقى ان الاوتبوت بتاع الكليك على الديكيومنت بيطلع عناصر مختلفه زى افتر او بيفور او اسبان مثلا او اى عناصر جوا المحتويات بتاعك دى .. يبقى هنا لازم انى اقفل حاجه اسمها البروباجيشين بتاع العنصر و هو انك اما تدوس على العنصر او اى حته جواه كانك مدوستش على حاجه .. و بعمل كدا من خلال انى اعمل ايفينت كليك على العنصر و اعمل ( اى.ستوب بروباجيشين() ) تمام كدا زى ما كنت بعمل مثلا ( اى.برفينت ديفيلت() ) هى هنا نفس الفكره 

// او ممكن نقول الاستوب بروباجيشين دى بتمكنك من انك اما تدوس على العنصر مش بتقدر توصل لاى عنصر من العناصر الى جواه او اى ابن من ابناءه و كمان مش بتوصل ليه هو نفسه .. لان هنا ف المثال دا لما تدووس على التووجيل ايكون او التووجيل ايكون هتلاقى انك بعد ما عملت ستوب بروباجيشين للعنصرين دوول الايليمنت بتاع الكليك مش بيرجع حاجه ف بالتالى الكوندشين بتاع ان لو الايليمنت بتاع الكليك لا تساوى التووجيل منيو او التووجيل ايكون اشتغلت (لان هنا الايليمنت فاضيه) و بالتالى بعدها الكوود يشتغل عادى  
liksContainer.addEventListener("click", (e) => {
    e.stopPropagation();
})
toggleIcon.addEventListener("click", (e) => {
    e.stopPropagation();
})

//** Prenventing The Submit Input From Sending The Informations And Going To The Home Page(Reloading) 
document.querySelector("[type='submit']").onclick = (e) => {
    e.preventDefault();
}


// Adding Animation On Hover 
document.querySelector(".animate-h").addEventListener("mouseenter", () => {
    document.querySelector(".animate-h").classList.toggle("playAnimate");
})


//** A Trick
document.querySelectorAll(".testimonials .ts-box").forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelectorAll(".ts-box img").forEach((img) => {
            img.classList.add("scaleit");
        })
        document.querySelectorAll(".ts-box .theP").forEach((P) => {
            P.style.color = "black";
        })
        document.querySelectorAll(".ts-box p").forEach((p) => {
            p.style.color = "black";
        })
        document.querySelectorAll(".ts-box h4").forEach((h) => {
            h.style.color = "black";
        })
    })
})


//** A Trick
// Wavy Background
let theHeader = document.querySelector(".features h2")

theHeader.addEventListener("mouseenter", () => {
    theHeader.style.width = "100%";
    theHeader.classList.add("TheOver");
})

//** Additional Information
document.addEventListener("click", (e) => {
    console.log(e.target.nodeName.toLowerCase());
    // = console.log(e.target.tagName.toLowerCase());
})