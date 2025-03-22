// ... existing code ...

// The issue is likely in your SalonCard component
// You might have something like a <div> inside a <p>, <h1-h6>, or other elements that don't allow block elements
// Or you might have invalid nesting like <a> inside another <a>

// For example, if you have something like:
return (
  <div className="salon-card">
    <h3>
      <div className="salon-title">{salon.name}</div> {/* This is invalid - can't put div inside h3 */}
    </h3>
    {/* ... other content ... */}
  </div>
);

// Change it to:
return (
  <div className="salon-card">
    <h3 className="salon-title">{salon.name}</h3>
    {/* ... other content ... */}
  </div>
);

// ... existing code ...