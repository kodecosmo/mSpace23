'use client';

import Head from 'next/head'

export default function Tags({ title = "Que", description = "Welcome to Que. Your online tutoring site." }) {

    return (
        <Head>

            {/* Setting The Viewport */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Basic HTML Meta Tags */}
            <title>{title}</title>

            <link rel="icon" href="/favicon.svg" type="image/svg" sizes="32x32"
            />

            <meta name="keywords" content="your, tags" />
            <meta name="description" content={description} />
            <meta name="subject" content="your website's subject" />
            <meta name="copyright" content="company name" />
            <meta name="language" content="ES" />
            <meta name="robots" content="index,follow" />
            <meta name="Classification" content="Business" />
            <meta name="author" content="name, email@hotmail.com" />
            <meta name="owner" content="" />
            <meta name="url" content="http://www.websiteaddrress.com" />
            <meta name="identifier-URL" content="http://www.websiteaddress.com" />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />
            <meta name="revisit-after" content="7 days" />
            <meta httpEquiv="Expires" content="0" />
            <meta httpEquiv="Pragma" content="no-cache" />
            <meta httpEquiv="Cache-Control" content="no-cache" />


            {/* Basic HTML Meta Tags */}
            <meta name="og:title" content="The Rock" />
            <meta name="og:type" content="movie" />
            <meta name="og:url" content="http://www.imdb.com/title/tt0117500/" />
            <meta name="og:image" content="http://ia.media-imdb.com/rock.jpg" />
            <meta name="og:site_name" content="IMDb" />
            <meta name="og:description" content={description} />
            <meta name="og:email" content="me@example.com" />
            <meta name="og:phone_number" content="650-123-4567" />
            <meta name="og:country-name" content="LK" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@site_account" />
            <meta name="twitter:creator" content="@individual_account" />
            <meta name="twitter:url" content="https://example.com/page.html" />
            <meta name="twitter:title" content="Content Title" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://example.com/image.jpg" />
            <meta name="twitter:image:alt" content="A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters." />

        </Head>
    )
}