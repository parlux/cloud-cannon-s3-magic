class ImageList {
  constructor() {
    this.imageListElem = document.querySelector('#image-list')
    this.images = []
    this.continuationToken = null
    this.maxCount = 10
    
    const s3 = new S3()
    s3.configure()
      .then(s3.loadImages.bind(s3))
      .then(this.onImagesLoaded.bind(this))
  }

  onImagesLoaded(images) {
    this.images = images
    this.images = this.filterValidImages()
    this.render()
  }

  filterValidImages() {
    return this.images.filter(image => {
      if (!image.Key.contains('.DS_Store') && !image.Key.match(/\/$/)) {
        return true
      }
    }).reverse()
  }

  buildImgixUrl(imageKey) {
    return `${IMGIX_PREFIX_URL}/${imageKey}`.replace(/images\//, '')
  }

  buildImageElement(image) {
    return `
      <div class="magic-bar__image-wrapper">
        <img src="${S3_PREFIX_URL}/${image.Key}" class="magic-bar__image" data-path="${this.buildImgixUrl(image.Key)}">
      </div>
    `
  }

  render() {
    const truncatedImageList = this.images.slice(0, this.maxCount)

    this.imageListElem.innerHTML = truncatedImageList.map(image => {
      return this.buildImageElement(image)
    }).join('')
  }
}
