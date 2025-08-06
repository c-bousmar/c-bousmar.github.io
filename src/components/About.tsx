import { motion } from 'framer-motion';

const About = () => {
  const books = [
    {
      image: "/books/the_art_of_the_start_2.0.jpg",
      title: "The Art of the Start 2.0",
      author: "Guy Kawasaki"
    },
    {
      image: "/books/the_culture_map.jpg",
      title: "The Culture Map",
      author: "Erin Meyer"
    },
    {
      image: "/books/clutter_free_revolution.jpg",
      title: "Clutter-Free Revolution",
      author: "Evan Michael Zisli"
    },
    {
      image: "/books/deep_work.jpg",
      title: "Deep Work",
      author: "Cal Newport"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Alongside work and studies, I do find myself navigating across multiple passions and interests.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          I cherish time with <b>family</b> and <b>friends</b>. Though I may not be the best at keeping in touch through messages, I never hesitate to travel across the globe to visit those who matter most.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          I am fascinated by other cultures which leads me to <b>travel</b> around the world in order to discover more about people, the way they live, laugh, love. This led me to <b>photography</b>, imprinting moments in a forever frames. In that regard, my pictures are from landscape, street, and travel photography.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          I stay in shape by mostly <b>running</b> and stay connected to nature by <b>hiking</b> and <b>climbing</b>.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          When time allows, I love immersing myself in <b>board-</b> and <b>roleplaying- games</b>, where creativity and camaraderie take center stage.
          </p>
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">
            Some Great Reads
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12">
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -50 : 50 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0 
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img 
                src={book.image} 
                alt={book.title} 
                className="mx-auto h-64 object-contain" 
              />
              <p className="italic mt-4">{book.title}</p>
              <p className="text-gray-700">{book.author}</p>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default About; 