# My Portfolio Website

Hey there! Welcome to the repository of my personal portfolio website. I built this to showcase my work, share my journey, and make it easy for people to reach out to me.

## What's This About?

This is my digital home on the internet – a place where I share my projects, skills, and a bit about who I am. I wanted something that felt modern, looked great, and actually worked smoothly, so I picked some of my favorite tools to build it.

## Built With

Here's what powers this site:

- **[Next.js](https://nextjs.org/)** - The React framework that makes everything fast and SEO-friendly
- **[Tailwind CSS](https://tailwindcss.com/)** - For styling without the headache of writing custom CSS
- **[Aceternity UI](https://ui.aceternity.com/)** - Beautiful, pre-built components that gave my site that extra polish
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations that bring the site to life
- **[Nodemailer](https://nodemailer.com/)** - Handles the contact form so people can actually reach me

## Features

- **Smooth Animations** - Everything moves nicely thanks to Framer Motion
- **Responsive Design** - Looks good on your phone, tablet, or desktop
- **Contact Form** - Actually works! Powered by Nodemailer with Gmail SMTP
- **Fast Loading** - Next.js makes sure everything loads quickly

## Getting Started

Want to run this locally? Here's how:

### Prerequisites

Make sure you have Node.js installed and version is mentioned in package.json file.

### Installation

1. Clone this repo:

```bash
git clone https://github.com/ajithkumar110302/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables:

Create a `.env` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you should see the site!

## Project Structure

```
portfolio/
├── app/                 # Next.js app directory
├── components/          # Reusable React components
├── public/             # Static files (images, etc.)
├── styles/             # Global styles
├── lib/                # Utility functions
└── app/api/                # API routes (contact form handler)
```

## Contact Form Setup

The contact form uses Gmail SMTP through Nodemailer. Here's what you need:

1. Enable 2-Step Verification on your Google Account
2. Generate an App Password
3. Add your credentials to `.env`
4. The API route handles the rest!

## Customization

Feel free to fork this and make it your own! Here are some things you might want to change:

- Update the content in the components to reflect your own story
- Swap out the color scheme in `tailwind.config.js`
- Add or remove sections based on what you want to showcase
- Customize the animations in Framer Motion components

## Building for Production

Ready to deploy? Build the production version:

```bash
npm run build
npm start
```

## Deployment

I recommend deploying on [Vercel](https://vercel.com) (it's made by the Next.js team, so it just works):

1. Push your code to GitHub
2. Import the project on Vercel
3. Add your environment variables
4. Deploy!

Other good options: Netlify, Railway, or any platform that supports Next.js.

## Contributing

This is my personal portfolio, but if you spot a bug or have a suggestion, feel free to open an issue or submit a pull request. I'd appreciate it!
