const createPostForm = document.querySelector("#create_post_form")
const msg = document.querySelector(".msg");
const instagramPost = document.querySelector(".instagram_post")
console.log(instagramPost);

createPostForm.onsubmit = (e) =>{
   e.preventDefault()

// show data to ls
 const showData = () =>{
    const allData = getDataLs("posts")
    let content = "";
   if(allData.length > 0){
        allData.reverse().map((item,index) =>{
            content += `<div class="post-container">
            <!------- Post Header ------>
            <div class="post-header">
                <div class="author">
                    <div class="author-profile-img">
                        <img src="${item.author_photo}" alt="">
                    </div>
                    <div class="post-author-name">
                        <a href="#">${item.author_name}</a>
                        <span><i class="fas fa-circle"></i>${timeAgo(item.post_time)}</span>
                        <a href="#"></a>
                        <p>${item.author_address}</p>
                    </div>
                </div>
                <div class="three-dot">
                    <a href="#"><i class="fas fa-ellipsis-h"></i></a>
                </div>
            </div>

            <!------ Post Body ------>
            <div class="post-body">
                <div class="post-img">
                    ${item.post_img ? `<img src="${item.post_img}" alt="">` : ""}
                </div>
                <div class="post-reaction">
                    <div class="p-reaction-left">
                        <div class="post-like post-icon">
                            <span><i class="far fa-heart"></i></span>
                        </div>
                        <div class="post-comment post-icon">
                            <span><i class="far fa-comment"></i></span>
                        </div>
                        <div class="post-share post-icon">
                            <span><i class="far fa-paper-plane"></i></span>
                        </div>
                    </div>
                    <div class="post-save post-icon">
                        <span><i class="far fa-bookmark"></i></span>
                    </div>
                </div>
                <div class="post-like-total">
                    <p> 20,028,910 likes</p>
                </div>
                <div class="post-content">
                    <p>${item.post_content ? item.post_content : ""}</p>
                </div>
                <div class="write-comment">
                    <p>View all 176k comments</p>
                    <form action="#">
                        <input type="text" name="" id="" placeholder="Add a comment…">
                    </form>
                    <span><i class="far fa-smile"></i></span>
                </div>
            </div>    
            
        </div>`
        })
   }else{
        content += `<h2>No Found Post </h2>`
   }
   instagramPost.innerHTML = content;
 }
 showData()



    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData);
    const prevData = getDataLs("posts");
// send data to ls 
    if(!data.author_name || !data.author_photo){
        msg.innerHTML= createAlert("Author Name And Author Photo Most have be Requared")
    }else{
        prevData.push({
            author_name : data.author_name,
            author_photo : data.author_photo,
            author_address: data.author_address,
            post_content: data.post_content ?? null,
            post_img : data.post_photo ?? null,
            post_time: Date.now()
        })
        msg.innerHTML= createAlert("data stable","primary")
    }
    sendDataLs("posts",prevData)

   showData()
    e.target.reset()
}