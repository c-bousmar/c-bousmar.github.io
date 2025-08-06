const API_BASE_URL = 'http://localhost:3000/api';

export interface Project {
  id: string;
  title: string;
  description: string; // Markdown content
  year: string;
  status: string;
  technologies: string[];
  github: string;
  report: string;
  image: string;
  featured: boolean;
  entity: string;
  isGradedBest: boolean;
  category?: Category;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  abstract: string;
  pdf: string;
  code: string;
  citations: number;
  featured: boolean;
  category?: Category;
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  type: string;
  description: string;
  slides: string;
  video: string;
  audience: string;
  featured: boolean;
  category?: Category;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
  bio: string;
  avatar: string;
}

class ApiService {
  private async fetchApi<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Projects
  async getProjects(limit?: number): Promise<Project[]> {
    const endpoint = limit ? `/projects?limit=${limit}` : '/projects';
    return this.fetchApi<Project[]>(endpoint);
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return this.fetchApi<Project[]>('/projects?featured=true');
  }

  // Publications
  async getPublications(limit?: number): Promise<Publication[]> {
    const endpoint = limit ? `/publications?limit=${limit}` : '/publications';
    return this.fetchApi<Publication[]>(endpoint);
  }

  async getFeaturedPublications(): Promise<Publication[]> {
    return this.fetchApi<Publication[]>('/publications?featured=true');
  }

  // Talks
  async getTalks(limit?: number): Promise<Talk[]> {
    const endpoint = limit ? `/talks?limit=${limit}` : '/talks';
    return this.fetchApi<Talk[]>(endpoint);
  }

  async getFeaturedTalks(): Promise<Talk[]> {
    return this.fetchApi<Talk[]>('/talks?featured=true');
  }

  // Profile
  async getProfile(): Promise<Profile> {
    return this.fetchApi<Profile>('/profiles');
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return this.fetchApi<Category[]>('/categories');
  }
}

export const apiService = new ApiService(); 