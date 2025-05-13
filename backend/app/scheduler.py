
from apscheduler.schedulers.background import BackgroundScheduler
from app.services.mock_data import insert_mock_odds

scheduler = BackgroundScheduler()
scheduler.add_job(insert_mock_odds, "interval", seconds=60)
scheduler.start()
