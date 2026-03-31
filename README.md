# Sociocraft

Sociocraft is a modern, conversion-focused website for a healthcare digital marketing agency. It is designed to help doctors, clinics, and hospitals build a strong online presence and generate patient leads through structured digital strategies.

## Features

- Clean and modern UI focused on conversions  
- Fully responsive design across devices  
- Case study showcase with real results  
- Lead generation contact form (EmailJS integration)  
- Smooth animations using Framer Motion  
- Structured pages: Home, About, Services, Case Studies, Contact  

## Tech Stack

- React (Vite)  
- TypeScript  
- Tailwind CSS  
- shadcn/ui  
- Framer Motion  
- EmailJS  

## Getting Started

Clone the repository:

git clone <YOUR_GIT_URL>  
cd <YOUR_PROJECT_NAME>  

Install dependencies:

npm install  

Run the development server:

npm run dev  

## Contact Form Setup (EmailJS)

To enable email functionality:

1. Create an account on EmailJS  
2. Add a Gmail service  
3. Create an email template  
4. Replace credentials inside Contact.tsx:

emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  {
    name,
    email,
    phone,
    message
  },
  "YOUR_PUBLIC_KEY"
);

## Project Structure

src/  
  components/  
  pages/  
  assets/  
  hooks/  

## Deployment

This project can be deployed on:

- Vercel  
- Netlify  
- Any static hosting platform  

## Notes

- This is a frontend-focused project  
- Email handling is done via EmailJS (no backend required)  

## Author

Prakshal Jain  
GitHub: https://github.com/Prakshal97  
LinkedIn: https://linkedin.com/in/prakshal-jain-b832b5331  

## License

This project is open source and available under the MIT License.
