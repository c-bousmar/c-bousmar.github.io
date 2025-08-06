# Academic Portfolio Website

A modern, responsive academic portfolio website built with React, TypeScript, and Tailwind CSS, powered by Manifest backend for content management.

## 🚀 Features

### Frontend
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Dynamic Content**: Fetches data from Manifest backend
- **See More Functionality**: Shows featured items with option to view all
- **Breadcrumb Navigation**: Easy navigation between sections
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading States**: Professional loading indicators

### Backend (Manifest)
- **Content Management**: Easy admin panel for managing projects, publications, talks
- **Secure API**: RESTful API for frontend communication
- **File Storage**: Store images, PDFs, and other assets
- **Data Validation**: Ensures data integrity
- **Real-time Updates**: Changes reflect immediately

## 📁 Project Structure

```
personal_academic_portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with CV link
│   │   ├── Hero.tsx            # Landing section
│   │   ├── About.tsx           # Personal information
│   │   ├── Projects.tsx        # Research projects (with "See More")
│   │   ├── Publications.tsx    # Academic papers (with "See More")
│   │   ├── Talks.tsx           # Speaking engagements (with "See More")
│   │   ├── CV.tsx              # Curriculum vitae page
│   │   ├── Footer.tsx          # Contact and links
│   │   └── Breadcrumb.tsx      # Navigation breadcrumbs
│   ├── services/
│   │   └── api.ts              # API service for Manifest
│   └── App.tsx                 # Main application
├── academic-portfolio-backend/  # Manifest backend
│   └── manifest.yaml           # Data model definition
└── README.md                   # This file
```

## 🛠️ Setup Instructions

### 1. Frontend Setup

```bash
# Navigate to the frontend directory
cd personal_academic_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5175/`

### 2. Backend Setup (Manifest)

```bash
# Navigate to the backend directory
cd academic-portfolio-backend

# Start the Manifest server
npm run start
```

The Manifest admin panel will be available at `http://localhost:3000/admin`

### 3. Configure Your Data

1. **Access the Admin Panel**: Go to `http://localhost:3000/admin`
2. **Add Your Content**:
   - **Profile**: Your personal information
   - **Projects**: Your research projects
   - **Publications**: Your academic papers
   - **Talks**: Your speaking engagements
   - **Categories**: Organize your content

3. **Set Featured Items**: Mark important items as "featured" to show them on the homepage

## 🎯 Key Features

### "See More" Functionality
- **Projects**: Shows 4 featured projects, "See All Projects" button
- **Publications**: Shows 3 featured publications, "See All Publications" button  
- **Talks**: Shows 3 featured talks, "See All Talks" button
- **Breadcrumb Navigation**: Easy navigation back to featured view

### Manifest Integration
- **Dynamic Content**: All content is fetched from Manifest API
- **Fallback Data**: Static data if API is unavailable
- **Real-time Updates**: Changes in admin panel reflect immediately
- **Secure**: Built-in authentication and validation

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Smooth Animations**: Framer Motion animations
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 📝 Customization

### Update Personal Information
Edit the following files:
- `src/components/Hero.tsx` - Your name and introduction
- `src/components/About.tsx` - Your background and skills
- `src/components/CV.tsx` - Your curriculum vitae

### Add Your Content via Manifest
1. Go to `http://localhost:3000/admin`
2. Add your projects, publications, and talks
3. Mark important items as "featured"
4. Upload images and files

### API Configuration
Update the API base URL in `src/services/api.ts`:
```typescript
const API_BASE_URL = 'http://localhost:3000/api';
```

## 🚀 Deployment

### Frontend Deployment
```bash
# Build for production
npm run build

# Deploy to your preferred hosting service
# (Vercel, Netlify, GitHub Pages, etc.)
```

### Backend Deployment
Manifest can be deployed to:
- **Vercel**: `vercel --prod`
- **Railway**: Connect your GitHub repo
- **Render**: Deploy from GitHub
- **Heroku**: Add buildpack and deploy

## 🔧 Technical Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

### Backend
- **Manifest** - Backend as a service
- **PostgreSQL** - Database (managed by Manifest)
- **REST API** - Data communication
- **Admin Panel** - Content management

## 📊 Data Model

The Manifest backend includes these entities:
- **Project**: Research projects with technologies, status, links
- **Publication**: Academic papers with citations, DOI, PDFs
- **Talk**: Speaking engagements with slides, videos
- **Profile**: Personal information and social links
- **Category**: Content organization
- **Education**: Academic background
- **Experience**: Professional experience
- **Skill**: Technical skills
- **Award**: Honors and awards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your own academic portfolio!

## 🆘 Support

- **Manifest Documentation**: [manifest.build](https://manifest.build)
- **GitHub Issues**: Report bugs or request features
- **Discord**: Join the Manifest community

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Manifest
