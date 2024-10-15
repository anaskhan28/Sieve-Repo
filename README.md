# Sieve 🎬📚

Welcome to **Sieve**, an IMDB-like platform for discovering and rating the best YouTube playlists or videos on software development, web development, programming languages, frameworks, design, open source, and more. This platform aims to help newcomers and enthusiasts find high-quality and most-rated tutorials.

![Sieve Banner](public/banner.png)

## Table of Contents 📑

- [Project Overview](#project-overview-📝)
- [Features](#features-✨)
- [Tech Stack](#tech-stack-🛠️)
- [Installation](#installation-📥)
- [Usage](#usage-🚀)
- [Contributing](#contributing-🤝)
- [License](#license-📄)
- [Contact](#contact-📧)

## Project Overview 📝

Sieve is designed to be a comprehensive and user-friendly platform where users can:
- Discover curated YouTube playlists on various technical topics.
- Rate and review playlists to provide feedback and help others find valuable content.
- Contribute by adding new playlists and enhancing the platform’s content library.

## Features ✨

- **User Registration and Authentication**: Secure user sign-up and login functionalities.
- **Playlist Discovery**: Browse and search for the best playlists on different technical subjects.
- **Rating System**: Rate and review playlists to help others gauge the quality of the content.
- **User Contributions**: Submit new playlists to the platform, enriching the content repository.

## Tech Stack 🛠️

- **Frontend**: Next.js, TypeScript
- **Backend**: Supabase, Next.js Server Actions
- **Database**: Postgres
- **Validation**: Zod

## Installation 📥

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/anaskhan28/sieve-repo.git
    cd sieve-repo
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**: Create a `.env` file in the root directory and add the necessary environment variables.
    ```
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_uri
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    YOUTUBE_API_KEY=your_youtube_api_key
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

## Usage 🚀

Once the development server is running, you can:

- **Access the platform**: Open [sieveit.me](https://sieveit.me) in your browser.
- **Register/Login**: Create a new account or log in to access all features.
- **Browse Playlists**: Explore playlists based on your interests.
- **Rate & Review**: Provide ratings and reviews to share your feedback.
- **Contribute**: Add new playlists to help the community grow.

![Sieve Screenshot](public/playlist.png)



## License 📄

Distributed under the MIT License. See `LICENSE` for more information.

## Contact 📧

- **Anas Khan** - [@anaskhan_28](https://x.com/anaskhan_28) - khananasatique@gmail.com
- **Project Link**: [https://createsieve.vercel.app/](https://sieveit.me)

Thank you for contributing to Sieve! Together, we can build a valuable resource for learners everywhere.
