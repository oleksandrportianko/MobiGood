start_dev: dev_up collect_static

dev_up:
	docker-compose -f docker-compose.dev.yml up -d	

dev_build: 
	docker-compose -f docker-compose.dev.yml build

dev_stop:
	docker-compose -f docker-compose.dev.yml stop

dev_down:
	docker-compose -f docker-compose.dev.yml down

collect_static:
	docker exec backend_mobigood python manage.py collectstatic --noinput