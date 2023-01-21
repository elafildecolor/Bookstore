import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <>
      <Header />
      <Routes>
        <Route index element={<BooksPage />} />
        <Route path="/categories/" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}
export default App;
