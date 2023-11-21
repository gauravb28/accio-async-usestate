import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [allPosts, setAllPosts] = useState([
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 2,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      userId: 2,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    },
    {
      userId: 3,
      id: 5,
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
    },
  ]);

  const [filteredPosts, setFilteredPosts] = useState(allPosts);

  const [filterData, setFilterData] = useState({
    userId: '',
    body: '',
  });

  const handleChange = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });

    setFilteredPosts(
      allPosts.filter((post) => post.body.indexOf(filterData.body) !== -1)
    );

    setFilteredPosts((posts) => {
      return posts.filter(
        (post) => post.userId.toString().indexOf(filterData.userId) !== -1
      );
    });
    // Wrong version of code below
    // setFilteredPosts(
    //   filteredPosts.filter(
    //     (post) => post.userId.toString().indexOf(filterData.userId) !== -1
    //   )
    // );
  };

  const getInitialTheme = () => {
    return localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light-theme';
  };

  const [theme, setTheme] = useState(getInitialTheme());

  const handleToggle = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    if (theme === 'dark-theme') {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <button className="change-theme" onClick={handleToggle}>
        Toggle
      </button>

      <h2>Filters</h2>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          name="userId"
          id="userId"
          value={filterData.userId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          name="body"
          id="body"
          value={filterData.body}
          onChange={handleChange}
        />
      </div>

      <h2>Posts</h2>
      {filteredPosts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>-by {post.userId}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
