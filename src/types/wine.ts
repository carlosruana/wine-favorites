export interface Wine {
	id: number;
	name: string;
	rating: number;
	comments: string;
	type: 'white' | 'red' | 'rosé' | 'other';
  }
  