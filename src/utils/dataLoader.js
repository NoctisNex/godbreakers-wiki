// Cache for loaded data
const dataCache = new Map();

export async function loadData(type) {
  // Check cache first
  if (dataCache.has(type)) {
    return dataCache.get(type);
  }

  try {
    const response = await fetch(`/src/data/${type}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load ${type} data`);
    }
    
    const data = await response.json();
    dataCache.set(type, data);
    return data;
  } catch (error) {
    console.error(`Error loading ${type} data:`, error);
    // Return empty array if file doesn't exist yet
    return [];
  }
}

export function clearCache() {
  dataCache.clear();
}

