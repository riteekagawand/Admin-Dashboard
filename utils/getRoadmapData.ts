// utils/getRoadmapData.ts

export async function getRoadmapData() {
    try {
      const response = await fetch('/roadmap.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching roadmap data:', error);
      return [];
    }
  }
  