document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.js-form')) {
    const commentsCounter = document.getElementById('comments-counter');

    commentsCounter.textContent =
      document.querySelectorAll('.comments-item').length;

    function sendForm() {
      const newCommentForm = document.querySelector('.comments-form'),
        inputName = newCommentForm.querySelector('#form-name'),
        inputEmail = newCommentForm.querySelector('#form-email'),
        inputText = newCommentForm.querySelector('#form-comment');

      newCommentForm.querySelectorAll('input').forEach((item) => {
        item.addEventListener('input', (event) => {
          const input = event.target;

          if (input.type === 'text') {
            input.value = input.value.replace(/[^a-z-']/gi, '');
          }

          if (input.type === 'email') {
            input.value = input.value.replace(/[^a-z-.@_0-9']/gi, '');
          }
        });

        item.addEventListener('blur', () => {
          item.value = item.value.replace(/-+/g, '-');
          item.value = item.value.replace(/ +/g, ' ');
          item.value = item.value.replace(/^(-| )+/g, '');
          item.value = item.value.replace(/(-| )$/g, '');
          if (item.type === 'text') {
            item.value = item.value.replace(/^./g, (char) =>
              char.toUpperCase()
            );
            item.value = item.value.replace(/(?!^).*/, (char) =>
              char.toLowerCase()
            );
          }
        });
      });

      newCommentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let flag = true;

        if (!inputName.value.trim()) {
          flag = false;
        }

        if (inputName.value.length < 3) {
          flag = false;
        }

        if (!inputText.value.trim()) {
          flag = false;
        }

        if (inputText.value.length < 3) {
          flag = false;
        }

        if (flag) {
          const formData = new FormData(newCommentForm),
            body = {};

          formData.forEach((value, key) => {
            body[key] = value;
          });

          postComment();

          // postData(body)
          //   .then((response) => {
          //     if (response.status !== 200) {
          //       throw new Error('Status is not 200');
          //     }

          //     postComment();

          //     commentsCounter.textContent =
          //       document.querySelectorAll('.comments-item').length;

          //     newCommentForm.reset();
          //   })
          //   .catch((error) => {
          //     console.error(error);
          //   });
        }
      });

      function postData(body) {
        return fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
      }

      function postComment() {
        const newCommentItem = document.createElement('div'),
          date = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

        newCommentItem.classList.add('comments__item', 'comments-item');

        newCommentItem.innerHTML = `
          <p class="text manrope manrope-text2 comments-item__date">${date}</p>
          <p class="neue neue-headline3 m2headline4 comments-item__name">${inputName.value}</p>
          <p class="manrope manrope-text2 m2comment comments-item__content comments-item__content_temp">${inputText.value}</p>
          <a class="neue neue-link m2comment comments-item__reply" href="#">Reply</a>
        `;

        console.log(newCommentItem);

        document.querySelector('.comments-list').prepend(newCommentItem);

        // Temporary
        commentsCounter.textContent =
          document.querySelectorAll('.comments-item').length;

        newCommentForm.reset();
      }
    }

    sendForm();
  }
});
