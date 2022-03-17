# Dance-Website
doctype html
html  
    head 
        title CJ Dance Acadamy
        <link rel="apple-touch-icon" sizes="180x180" href="../static/img/favicon_io/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="../static/img/favicon_io/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../static/img/favicon_io/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        style 
            include ../static/style.css

    body
        nav#navbar
            ul
                div#logo
                    img(src="/static/img/logoo.png")
                li #[a(href="/") Home]
                li #[a(href="/") About]
                li #[a(href="/") Services]
                li #[a(href="/") Class Info]
                li #[a(href="/") Contact Us]

        section#introSection
            div Welcome to CJ Dance Academy
            div.small Eat Sleep Dance Repeat
        h2#mission Our Mission
        section#missionSection
            div.card
                h3 Dance Perfection
                div.card-box
                    div.card-img
                        img(src="/static/img/1.png")
                    div.card-content
                        p This is the best dance academy of the universe

            div.card
                h3 Dance the way you like
                div.card-box
                    div.card-img
                        img(src="/static/img/2.png")
                    div.card-content
                        p This is the best dance academy of the universe

            div.card
                h3 Expert Teaching
                div.card-box
                    div.card-img
                        img(src="/static/img/3.png")
                    div.card-content
                        p This is the best dance academy of the universe
        section#sponsorsSection
            h2 Our Sponsors
            div#sponsors
                img(src= "/static/img/logo1.png", alt= "Sponsor Image", class= "spImage")
                img(src= "/static/img/logo2.png", alt= "Sponsor Image", class= "spImage")
                img(src= "/static/img/logo3.png", alt= "Sponsor Image", class= "spImage")
                img(src= "/static/img/logo4.png", alt= "Sponsor Image", class= "spImage")
        footer#footer
            | Copyright © 2022 CJDanceAcademy.com | All Rights Reserved         

        script
            include ../static/script.js   
