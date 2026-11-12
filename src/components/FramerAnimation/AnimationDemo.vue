<template>
  <div class="animation-demo">
    <h2>Animation Demo</h2>
    
    <div class="demo-section">
      <h3>Page Transitions</h3>
      <p>Navigate between routes to see smooth page transitions with fade, scale, and position animations.</p>
      <div class="demo-buttons">
        <router-link to="/" class="demo-btn">Home</router-link>
        <router-link to="/products" class="demo-btn">Categories</router-link>
      </div>
    </div>

    <div class="demo-section">
      <h3>Image Loading Effects</h3>
      <p>Images below demonstrate the 0.5 second blur effect and loading animations:</p>
      
      <div class="image-grid">
        <div class="image-item">
          <ImageLoader 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" 
            alt="Flooring Sample 1"
            class="demo-image"
          />
          <p>Sample Image 1</p>
        </div>
        
        <div class="image-item">
          <ImageLoader 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" 
            alt="Flooring Sample 2"
            class="demo-image"
          />
          <p>Sample Image 2</p>
        </div>
        
        <div class="image-item">
          <ImageLoader 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" 
            alt="Flooring Sample 3"
            class="demo-image"
          />
          <p>Sample Image 3</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>Animation Features</h3>
      <ul class="features-list">
        <li>✅ Smooth page transitions (0.4s duration)</li>
        <li>✅ Image blur effects (0.5s duration)</li>
        <li>✅ Loading placeholders with animations</li>
        <li>✅ Professional easing curves</li>
        <li>✅ Performance optimized with will-change</li>
        <li>✅ Automatic image preloading</li>
        <li>✅ Built with Vue's native transition system</li>
      </ul>
    </div>

    <div class="demo-section">
      <h3>How It Works</h3>
      <p>This implementation uses Vue's built-in transition system for optimal performance and compatibility:</p>
      <ul class="features-list">
        <li>🎯 <strong>Page Transitions:</strong> Vue's <code>&lt;transition&gt;</code> component with custom CSS</li>
        <li>🖼️ <strong>Image Loading:</strong> Conditional rendering with smooth fade and blur effects</li>
        <li>⚡ <strong>Performance:</strong> CSS transitions for hardware acceleration</li>
        <li>🔧 <strong>Maintainability:</strong> No external dependencies, pure Vue.js</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ImageLoader from './ImageLoader.vue'
</script>

<style scoped>
.animation-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.animation-demo h2 {
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.demo-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.demo-section h3 {
  color: #374151;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.demo-section p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.demo-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.demo-btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.image-item {
  text-align: center;
}

.demo-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.image-item p {
  color: #374151;
  font-weight: 500;
  margin: 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  padding: 0.5rem 0;
  color: #374151;
  font-size: 1.1rem;
}

.features-list li::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
  vertical-align: middle;
}

code {
  background: #e5e7eb;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .animation-demo {
    padding: 1rem;
  }
  
  .image-grid {
    grid-template-columns: 1fr;
  }
  
  .demo-buttons {
    justify-content: center;
  }
}
</style> 