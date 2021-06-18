import Post from '../post.entity';

export class PaginatedPostsResultDto {
  data: Post[];
  page: number;
  limit: number;
  totalCount: number;
}
