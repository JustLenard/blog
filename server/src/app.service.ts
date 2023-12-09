import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageStorageService } from './modules/image-storage/image-storage.service';
import { ImageEntity } from './utils/entities/image.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ImageEntity)
    private imageRepository: Repository<ImageEntity>,
    @Inject('uploadImages')
    private readonly imageStorageService: ImageStorageService,
  ) {}

  async getImageUrl(imageName: string) {
    const image = await this.imageRepository.findOneBy({ name: imageName });

    console.log('This is imageName', imageName);

    // if (!image) {
    //   console.log('Image not found');
    //   throw new NotFoundException();
    // }

    console.log('This is image', image);

    const imageUrl = this.imageStorageService.get(imageName);

    return imageUrl;
  }
}
