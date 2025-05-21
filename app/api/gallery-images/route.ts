import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const directoryPath = path.join(process.cwd(), 'public/assets/images/event-pictures');
    
    // Check if directory exists
    if (!fs.existsSync(directoryPath)) {
      return NextResponse.json({ error: 'Gallery directory not found' }, { status: 404 });
    }
    
    // Read all files in the directory
    const files = fs.readdirSync(directoryPath);
    
    // Filter for image files (you can add more extensions if needed)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
    
    // Generate paths for frontend
    const images = imageFiles.map(file => `/assets/images/event-pictures/${file}`);
    
    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
  }
} 