const express = require('express');
const router = express.Router();

// In-memory data store
let items = [];
let currentId = 1;

// Create a new item
router.post('/', (req, res) => {
  const { name, description } = req.body;
  const newItem = { id: currentId++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Get all items
router.get('/', (req, res) => {
  res.json(items);
});

// Get a single item by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const item = items.find(i => i.id === parseInt(id));
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
});

// Update an item by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const itemIndex = items.findIndex(i => i.id === parseInt(id));
  if (itemIndex === -1) return res.status(404).json({ message: 'Item not found' });
  items[itemIndex] = { id: parseInt(id), name, description };
  res.json(items[itemIndex]);
});

// Delete an item by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(i => i.id === parseInt(id));
  if (itemIndex === -1) return res.status(404).json({ message: 'Item not found' });
  items.splice(itemIndex, 1);
  res.json({ message: 'Item deleted' });
});

module.exports = router;
